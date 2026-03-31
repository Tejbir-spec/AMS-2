export type VehicleType = 'car' | 'boat';
export type StorageStatus = 'stored' | 'maintenance' | 'out' | 'pending';

export interface StorageItem {
  id: string;
  type: VehicleType;
  name: string;
  make: string;
  model: string;
  year: number;
  licensePlate?: string;
  hullId?: string;
  ownerName: string;
  ownerPhone: string;
  ownerEmail: string;
  unitNumber: string;
  status: StorageStatus;
  lastAccessed: string;
  imageUrl: string;
  notes?: string;
  insuranceExpiry?: string;
}
