const mongoose = require ('mongoose'); 

mongoose.connect(
	'',
	{useNewUrlParser: true, useUnifiedTopology: true}
);
const paymentSchema = new mongoose.Schema({
	id: String,
	itemld: String,
	paid: Boolean
	}); 

const Payment = mongoose.model('Payment', paymentSchema); 

module.exports = {
	Payment
};