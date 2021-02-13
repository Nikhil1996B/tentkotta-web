import Stripe from "stripe";

const stripe = new Stripe("pk_test_51IExDwKrvQRHiF5sQNaANpV2NIzC3HHEY5bfqduzyTHPe6IiY1Ij7lF4imX5jdbCYQ6DVMo3fI5egSexOsH1U0Mv00iWF6MVFW");

export default async (req, res) => {
  if (req.method === "POST") {
    try {
      const { amount } = req.body;

      const paymentIntent = await stripe.paymentIntents.create({
        amount,
        currency: "usd"
      });

      res.status(200).send(paymentIntent.client_secret);
    } catch (err) {
      res.status(500).json({ statusCode: 500, message: err.message });
    }
  } else {
    res.setHeader("Allow", "POST");
    res.status(405).end("Method Not Allowed");
  }
};
