const Razorpay = require("razorpay");
const Order = require("../../models/Razorpay");

if (!process.env.RAZORPAY_ID_KEY || !process.env.RAZORPAY_SECRET_KEY) {
  return res.status(500).json({ error: "Razorpay API keys are missing" });
}

let instance = new Razorpay({
  key_id: process.env.RAZORPAY_ID_KEY,
  key_secret: process.env.RAZORPAY_SECRET_KEY,
});

// Step 1: Create Order
exports.createOrder = async (req, res) => {
  try {
    const options = {
      amount: 500 * 100,
      currency: "INR",
    };
    const order = await instance.orders.create(options);

    // Save order information to the database using Sequelize
    const orderData = {
      id: "1234566",
      amount: order.amount,
      order_id: order.id,
    };

    const createdOrder = await Order.create(orderData);

    res.render("checkout", {
      createdOrder,
      amount: order.amount,
      order_id: order.id,
    });
  } catch (error) {
    console.error("Error creating order:", error);
    res.status(500).json({ error: "An error occurred while creating the order" });
  }
};

// Step 2: Verify Payment
exports.verifyPayment = async (req, res) => {
  try {
    const secret_key = process.env.RAZORPAY_SECRET_KEY;
    let body = req.body.razorpay_order_id + "|" + req.body.razorpay_payment_id;
    var crypto = require("crypto");
    var expectedSignature = crypto
      .createHmac("sha256", secret_key)
      .update(body.toString())
      .digest("hex");

    if (expectedSignature === req.body.razorpay_signature) {
      console.log("Payment Success");
      res.status(200).json({ message: "Payment Success" });
    } else {
      console.log("Payment Fail");
      res.status(400).json({ error: "Payment Failed" });
    }
  } catch (error) {
    console.error("Error verifying payment:", error);
    res.status(500).json({ error: "An error occurred while verifying the payment" });
  }
};
