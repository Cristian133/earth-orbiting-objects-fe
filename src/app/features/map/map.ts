import type { ElementRef, OnInit, OnDestroy } from '@angular/core';
import { ChangeDetectionStrategy, Component, ViewChild, inject } from '@angular/core';
import * as Cesium from 'cesium';
import { SATELLITE_TLES } from '../../core/constants/satellite.constants';
import { SatelliteService } from '../../core/services/satellite.service';

@Component({
  selector: 'app-map',
  standalone: true,
  template: ` <div #cesiumContainer class="cesium-container"></div> `,
  styles: [
    `
      .cesium-container {
        width: 100%;
        height: 100vh;
        position: relative;
      }
    `,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MapComponent implements OnInit, OnDestroy {
  @ViewChild('cesiumContainer', { static: true })
  private container!: ElementRef<HTMLDivElement>;

  private readonly satelliteService = inject(SatelliteService);
  private viewer: Cesium.Viewer | null = null;

  ngOnInit(): void {
    this.initializeViewer().catch((err: unknown) => {
      console.error('Error initializing Cesium viewer:', err);
    });
  }

  private async initializeViewer(): Promise<void> {
    this.viewer = new Cesium.Viewer(this.container.nativeElement, {
      terrainProvider: await Cesium.createWorldTerrainAsync(),
      animation: true,
      timeline: true,
      sceneModePicker: false,
      baseLayerPicker: false,
      geocoder: false,
      navigationHelpButton: false,
    });

    // ISS Example
    const { line1: tle1, line2: tle2 } = SATELLITE_TLES.ISS;

    const trajectory = this.satelliteService.getTrajectory(tle1, tle2, new Date(), 90);
    const positions = trajectory.map((p) =>
      Cesium.Cartesian3.fromDegrees(p.longitude, p.latitude, p.height)
    );

    // Add path
    this.viewer.entities.add({
      polyline: {
        positions: positions,
        width: 3,
        material: Cesium.Color.YELLOW.withAlpha(0.5),
      },
    });

    // Add satellite marker
    const currentPos = this.satelliteService.getSatellitePosition(tle1, tle2);
    if (currentPos) {
      this.viewer.entities.add({
        position: Cesium.Cartesian3.fromDegrees(
          currentPos.longitude,
          currentPos.latitude,
          currentPos.height
        ),
        point: { pixelSize: 10, color: Cesium.Color.RED },
        label: { text: 'ISS', font: '12pt sans-serif', pixelOffset: new Cesium.Cartesian2(0, -15) },
      });
    }
  }

  ngOnDestroy(): void {
    if (this.viewer) {
      this.viewer.destroy();
    }
  }
}
