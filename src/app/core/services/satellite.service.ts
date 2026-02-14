import { Injectable } from '@angular/core';
import * as satellite from 'satellite.js';

export interface SatellitePosition {
  longitude: number;
  latitude: number;
  height: number;
}

@Injectable({
  providedIn: 'root',
})
export class SatelliteService {
  /**
   * Propagates satellite position at a given time using TLE data.
   */
  getSatellitePosition(
    tleLine1: string,
    tleLine2: string,
    date: Date = new Date()
  ): SatellitePosition | null {
    const satrec = satellite.twoline2satrec(tleLine1, tleLine2);
    const positionAndVelocity = satellite.propagate(satrec, date);

    if (!positionAndVelocity?.position) {
      return null;
    }

    const positionEci = positionAndVelocity.position;
    if (
      typeof positionEci === 'boolean' ||
      isNaN(positionEci.x) ||
      isNaN(positionEci.y) ||
      isNaN(positionEci.z)
    ) {
      return null;
    }

    const gmst = satellite.gstime(date);
    const positionGd = satellite.eciToGeodetic(positionEci, gmst);

    if (isNaN(positionGd.longitude) || isNaN(positionGd.latitude) || isNaN(positionGd.height)) {
      return null;
    }

    return {
      longitude: satellite.degreesLong(positionGd.longitude),
      latitude: satellite.degreesLat(positionGd.latitude),
      height: positionGd.height * 1000, // Convert km to meters for Cesium
    };
  }

  /**
   * Generates a trajectory path for a given time window.
   */
  getTrajectory(
    tleLine1: string,
    tleLine2: string,
    startTime: Date,
    durationMinutes: number,
    stepSeconds = 60
  ): SatellitePosition[] {
    const positions: SatellitePosition[] = [];
    const endTime = new Date(startTime.getTime() + durationMinutes * 60 * 1000);

    for (
      let time = new Date(startTime);
      time <= endTime;
      time = new Date(time.getTime() + stepSeconds * 1000)
    ) {
      const pos = this.getSatellitePosition(tleLine1, tleLine2, time);
      if (pos) {
        positions.push(pos);
      }
    }

    return positions;
  }
}
