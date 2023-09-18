export declare namespace Zstack {
  type UnitType = 'B' | 'KB' | 'MB' | 'GB' | 'TB';

  interface IStorage {
    number: number;
    unit: UnitType;
  }

  interface Input {
    size: number;
    decimal?: number;
  }
}
