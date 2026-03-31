import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { 
  Car, 
  Ship, 
  Search, 
  Filter, 
  ChevronRight, 
  Plus, 
  Info, 
  Calendar, 
  User, 
  Phone, 
  Mail, 
  Tag, 
  X,
  ArrowLeft
} from "lucide-react";
import { StorageItem, VehicleType, StorageStatus } from "../types";
import { MOCK_STORAGE_ITEMS } from "../constants";

export default function StorageDashboard() {
  const [items, setItems] = useState<StorageItem[]>(MOCK_STORAGE_ITEMS);
  const [selectedItem, setSelectedItem] = useState<StorageItem | null>(null);
  const [filterType, setFilterType] = useState<VehicleType | 'all'>('all');
  const [searchQuery, setSearchQuery] = useState("");

  const filteredItems = items.filter(item => {
    const matchesType = filterType === 'all' || item.type === filterType;
    const matchesSearch = item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         item.ownerName.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         item.unitNumber.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesType && matchesSearch;
  });

  const getStatusColor = (status: StorageStatus) => {
    switch (status) {
      case 'stored': return 'bg-green-100 text-green-700 border-green-200';
      case 'maintenance': return 'bg-yellow-100 text-yellow-700 border-yellow-200';
      case 'out': return 'bg-blue-100 text-blue-700 border-blue-200';
      case 'pending': return 'bg-gray-100 text-gray-700 border-gray-200';
      default: return 'bg-gray-100 text-gray-700 border-gray-200';
    }
  };

  return (
    <div className="bg-gray-50 min-h-screen py-12">
      <div className="container-custom">
        <div className="flex flex-col md:flex-row md:items-center justify-between mb-8 gap-4">
          <div>
            <h1 className="text-3xl font-bold text-primary mb-2">Storage Management</h1>
            <p className="text-gray-500">Manage and track all stored vehicles and boats.</p>
          </div>
          <button className="flex items-center gap-2 bg-primary text-white px-6 py-3 rounded-lg font-semibold hover:bg-opacity-90 transition-all shadow-md w-fit">
            <Plus size={20} />
            <span>Add New Item</span>
          </button>
        </div>

        {/* Filters and Search */}
        <div className="bg-white p-4 rounded-xl shadow-sm mb-8 flex flex-col md:flex-row gap-4 items-center">
          <div className="relative flex-grow w-full">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
            <input 
              type="text" 
              placeholder="Search by name, owner, or unit..." 
              className="w-full pl-10 pr-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
          
          <div className="flex gap-2 w-full md:w-auto">
            <button 
              onClick={() => setFilterType('all')}
              className={`flex-1 md:flex-none px-4 py-2 rounded-lg border transition-all ${filterType === 'all' ? 'bg-primary text-white border-primary' : 'bg-white text-gray-600 border-gray-200 hover:border-primary'}`}
            >
              All
            </button>
            <button 
              onClick={() => setFilterType('car')}
              className={`flex-1 md:flex-none flex items-center justify-center gap-2 px-4 py-2 rounded-lg border transition-all ${filterType === 'car' ? 'bg-primary text-white border-primary' : 'bg-white text-gray-600 border-gray-200 hover:border-primary'}`}
            >
              <Car size={18} />
              Cars
            </button>
            <button 
              onClick={() => setFilterType('boat')}
              className={`flex-1 md:flex-none flex items-center justify-center gap-2 px-4 py-2 rounded-lg border transition-all ${filterType === 'boat' ? 'bg-primary text-white border-primary' : 'bg-white text-gray-600 border-gray-200 hover:border-primary'}`}
            >
              <Ship size={18} />
              Boats
            </button>
          </div>
        </div>

        {/* Grid View */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence mode="popLayout">
            {filteredItems.map((item) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                whileHover={{ y: -5 }}
                className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all border border-gray-100 cursor-pointer group"
                onClick={() => setSelectedItem(item)}
              >
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={item.imageUrl} 
                    alt={item.name} 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute top-3 right-3">
                    <span className={`px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider border ${getStatusColor(item.status)}`}>
                      {item.status}
                    </span>
                  </div>
                  <div className="absolute top-3 left-3">
                    <span className="bg-black/50 backdrop-blur-sm text-white px-3 py-1 rounded-full text-xs font-medium flex items-center gap-1">
                      {item.type === 'car' ? <Car size={14} /> : <Ship size={14} />}
                      {item.unitNumber}
                    </span>
                  </div>
                </div>
                
                <div className="p-5">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-xl font-bold text-gray-900">{item.name}</h3>
                    <ChevronRight className="text-gray-300 group-hover:text-primary transition-colors" />
                  </div>
                  <p className="text-gray-500 text-sm mb-4">{item.make} {item.model} ({item.year})</p>
                  
                  <div className="flex items-center gap-4 text-sm text-gray-600 border-t pt-4">
                    <div className="flex items-center gap-1">
                      <User size={14} className="text-gray-400" />
                      <span>{item.ownerName}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Calendar size={14} className="text-gray-400" />
                      <span>{item.lastAccessed}</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {filteredItems.length === 0 && (
          <div className="text-center py-20 bg-white rounded-2xl shadow-sm border border-dashed border-gray-300">
            <div className="bg-gray-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <Search className="text-gray-400" size={32} />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">No items found</h3>
            <p className="text-gray-500">Try adjusting your search or filters to find what you're looking for.</p>
          </div>
        )}
      </div>

      {/* Detail Modal */}
      <AnimatePresence>
        {selectedItem && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
            onClick={() => setSelectedItem(null)}
          >
            <motion.div 
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              className="bg-white w-full max-w-4xl max-h-[90vh] overflow-y-auto rounded-2xl shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Modal Header */}
              <div className="relative h-64 md:h-80">
                <img 
                  src={selectedItem.imageUrl} 
                  alt={selectedItem.name} 
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
                <button 
                  onClick={() => setSelectedItem(null)}
                  className="absolute top-4 right-4 bg-white/20 hover:bg-white/40 backdrop-blur-md text-white p-2 rounded-full transition-all"
                >
                  <X size={24} />
                </button>
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-8">
                  <div className="flex flex-wrap items-end justify-between gap-4">
                    <div>
                      <div className="flex items-center gap-2 mb-2">
                        <span className={`px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider border ${getStatusColor(selectedItem.status)}`}>
                          {selectedItem.status}
                        </span>
                        <span className="bg-white/20 backdrop-blur-md text-white px-3 py-1 rounded-full text-xs font-medium flex items-center gap-1">
                          {selectedItem.type === 'car' ? <Car size={14} /> : <Ship size={14} />}
                          Unit {selectedItem.unitNumber}
                        </span>
                      </div>
                      <h2 className="text-3xl md:text-4xl font-bold text-white">{selectedItem.name}</h2>
                      <p className="text-white/80 text-lg">{selectedItem.make} {selectedItem.model} • {selectedItem.year}</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Modal Content */}
              <div className="p-8">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                  {/* Left Column: Details */}
                  <div className="lg:col-span-2 space-y-8">
                    <section>
                      <h3 className="text-lg font-bold text-primary mb-4 flex items-center gap-2">
                        <Info size={20} />
                        Vehicle Information
                      </h3>
                      <div className="grid grid-cols-2 gap-6 bg-gray-50 p-6 rounded-xl">
                        <div>
                          <p className="text-xs text-gray-400 uppercase font-bold tracking-wider mb-1">Make</p>
                          <p className="font-semibold">{selectedItem.make}</p>
                        </div>
                        <div>
                          <p className="text-xs text-gray-400 uppercase font-bold tracking-wider mb-1">Model</p>
                          <p className="font-semibold">{selectedItem.model}</p>
                        </div>
                        <div>
                          <p className="text-xs text-gray-400 uppercase font-bold tracking-wider mb-1">Year</p>
                          <p className="font-semibold">{selectedItem.year}</p>
                        </div>
                        <div>
                          <p className="text-xs text-gray-400 uppercase font-bold tracking-wider mb-1">
                            {selectedItem.type === 'car' ? 'License Plate' : 'Hull ID'}
                          </p>
                          <p className="font-semibold">{selectedItem.type === 'car' ? selectedItem.licensePlate : selectedItem.hullId}</p>
                        </div>
                      </div>
                    </section>

                    <section>
                      <h3 className="text-lg font-bold text-primary mb-4 flex items-center gap-2">
                        <Tag size={20} />
                        Notes & Instructions
                      </h3>
                      <div className="bg-yellow-50 border-l-4 border-yellow-400 p-6 rounded-r-xl italic text-gray-700">
                        {selectedItem.notes || "No special instructions provided."}
                      </div>
                    </section>
                  </div>

                  {/* Right Column: Owner & Status */}
                  <div className="space-y-6">
                    <div className="bg-white border border-gray-100 rounded-2xl p-6 shadow-sm">
                      <h3 className="text-lg font-bold text-primary mb-4 flex items-center gap-2">
                        <User size={20} />
                        Owner Details
                      </h3>
                      <div className="space-y-4">
                        <div className="flex items-center gap-3">
                          <div className="bg-primary/10 p-2 rounded-lg text-primary">
                            <User size={18} />
                          </div>
                          <div>
                            <p className="text-xs text-gray-400 font-bold uppercase">Name</p>
                            <p className="font-semibold">{selectedItem.ownerName}</p>
                          </div>
                        </div>
                        <div className="flex items-center gap-3">
                          <div className="bg-primary/10 p-2 rounded-lg text-primary">
                            <Phone size={18} />
                          </div>
                          <div>
                            <p className="text-xs text-gray-400 font-bold uppercase">Phone</p>
                            <p className="font-semibold">{selectedItem.ownerPhone}</p>
                          </div>
                        </div>
                        <div className="flex items-center gap-3">
                          <div className="bg-primary/10 p-2 rounded-lg text-primary">
                            <Mail size={18} />
                          </div>
                          <div>
                            <p className="text-xs text-gray-400 font-bold uppercase">Email</p>
                            <p className="font-semibold break-all">{selectedItem.ownerEmail}</p>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="bg-white border border-gray-100 rounded-2xl p-6 shadow-sm">
                      <h3 className="text-lg font-bold text-primary mb-4 flex items-center gap-2">
                        <Calendar size={20} />
                        Storage Info
                      </h3>
                      <div className="space-y-4">
                        <div>
                          <p className="text-xs text-gray-400 font-bold uppercase mb-1">Last Accessed</p>
                          <p className="font-semibold">{selectedItem.lastAccessed}</p>
                        </div>
                        <div>
                          <p className="text-xs text-gray-400 font-bold uppercase mb-1">Insurance Expiry</p>
                          <p className={`font-semibold ${new Date(selectedItem.insuranceExpiry || '') < new Date() ? 'text-red-500' : 'text-gray-900'}`}>
                            {selectedItem.insuranceExpiry || 'N/A'}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mt-12 flex flex-wrap gap-4 pt-8 border-t">
                  <button className="flex-1 bg-primary text-white px-6 py-3 rounded-xl font-bold hover:bg-opacity-90 transition-all shadow-lg">
                    Edit Details
                  </button>
                  <button className="flex-1 bg-white border-2 border-gray-200 text-gray-700 px-6 py-3 rounded-xl font-bold hover:border-primary hover:text-primary transition-all">
                    Log Access
                  </button>
                  <button className="flex-1 bg-red-50 text-red-600 px-6 py-3 rounded-xl font-bold hover:bg-red-100 transition-all">
                    Remove from Storage
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
