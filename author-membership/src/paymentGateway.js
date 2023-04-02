const PaymentGateway = () => {

    const handleSubmit = async (event) => {
        event.preventDefault();
      
        const { name, email, cardNumber, expirationDate, cvc } = event.target.elements;
      
        const paymentMethod = await stripe.createPaymentMethod({
          type: 'card',
          card: {
            number: cardNumber.value,
            exp_month: expirationDate.value.split('/')[0],
            exp_year: expirationDate.value.split('/')[1],
            cvc: cvc.value,
          },
          billing_details: {
            name: name.value,
            email: email.value,
          },
        });
      
        const { error } = await stripe.confirmCardPayment('{PAYMENT_INTENT_CLIENT_SECRET}', {
          payment_method: paymentMethod.paymentMethod.id,
        });
      
        if (error) {
          console.error(error);
        } else {
          console.log('Payment successful!');
        }
      };

    return (
        <div>
            <form>
                <label>
                    Name:
                    <input type="text" name="name" />
                </label>
                <label>
                    Email:
                    <input type="email" name="email" />
                </label>
                <label>
                    Card number:
                    <input type="text" name="cardNumber" />
                </label>
                <label>
                    Expiration date:
                    <input type="text" name="expirationDate" />
                </label>
                <label>
                    CVC:
                    <input type="text" name="cvc" />
                </label>
                <button onClick={handleSubmit}>Submit Payment</button>
            </form>
        </div>
    )
}