var Schema = mongoose.Schema;

const slotSchema = new Schema ({
    start_time: String,
    end_time: String,
    slot_date: String    
  });

  const timeSlot = mongoose.model('slot', slotSchema)

module.exports = timeSlot;