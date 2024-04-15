package Adapter;

public class Main {
    public static void main(String[] args) {
        PaymentProcessor paypalProcessor = new PayPalAdapter(new PayPal());
        PaymentProcessor stripeProcessor = new StripeAdapter(new Stripe());

        paypalProcessor.processPayment(150.0);

        stripeProcessor.processPayment(150.0);
    }
}
