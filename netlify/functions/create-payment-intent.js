const dotenv = require('dotenv');
const stripe = require('stripe');

dotenv.config();
const stripeInstance = stripe(process.env.STRIPE_SECRET_KEY);

exports.handler = async function(event) {
  try {
    const { amount } = JSON.parse(event.body);
    const paymentIntent = await stripeInstance.paymentIntents.create({
      amount,
      currency: "usd",
      payment_method_types: ["card"],
    });

    return {
      statusCode: 200,
      body: JSON.stringify({ paymentIntent }),
    };
  } catch (error) {
    console.error({ error });
    return {
      statusCode: 400,
      body: JSON.stringify({ error: error.message }),
    };
  }
};
