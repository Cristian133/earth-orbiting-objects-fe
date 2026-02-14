import { TestBed } from '@angular/core/testing';
import { SatelliteService } from './satellite.service';

describe('SatelliteService', () => {
  let service: SatelliteService;

  const TLE_LINE_1 = '1 25544U 98067A   24044.54228308  .00016147  00000-0  28781-3 0  9999';
  const TLE_LINE_2 = '2 25544  51.6416 250.7189 0004184  38.2562  25.6888 15.49544834438991';

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SatelliteService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('getSatellitePosition', () => {
    it('should return position for a given time', () => {
      const date = new Date('2024-02-13T12:00:00Z');
      const position = service.getSatellitePosition(TLE_LINE_1, TLE_LINE_2, date);

      expect(position).not.toBeNull();
      if (position) {
        expect(position.longitude).toBeDefined();
        expect(position.latitude).toBeDefined();
        expect(position.height).toBeDefined();
        // Specific values for this TLE and time (approximate check)
        expect(position.latitude).toBeGreaterThan(-90);
        expect(position.latitude).toBeLessThan(90);
        expect(position.longitude).toBeGreaterThan(-180);
        expect(position.longitude).toBeLessThan(180);
        // Height should be positive (in meters)
        expect(position.height).toBeGreaterThan(0);
      }
    });

    it('should return null for invalid TLE data', () => {
      const position = service.getSatellitePosition('invalid', 'data');
      expect(position).toBeNull();
    });
  });

  describe('getTrajectory', () => {
    it('should generate an array of positions', () => {
      const startTime = new Date('2024-02-13T12:00:00Z');
      const durationMinutes = 10;
      const stepSeconds = 60;

      const trajectory = service.getTrajectory(
        TLE_LINE_1,
        TLE_LINE_2,
        startTime,
        durationMinutes,
        stepSeconds
      );

      // 10 minutes / 1 minute step = 10 steps + start = 11 positions
      expect(trajectory.length).toBe(11);
      trajectory.forEach((pos) => {
        expect(pos.latitude).toBeDefined();
        expect(pos.longitude).toBeDefined();
      });
    });

    it('should return empty array if no positions can be generated', () => {
      const trajectory = service.getTrajectory('invalid', 'data', new Date(), 10);
      expect(trajectory.length).toBe(0);
    });
  });
});
