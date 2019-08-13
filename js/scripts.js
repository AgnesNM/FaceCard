const supportedCards = {
    visa, mastercard
  };

  const countries = [
    {
      code: "US",
      currency: "USD",
      currencyName: '',
      country: 'United States'
    },
    {
      code: "NG",
      currency: "NGN",
      currencyName: '',
      country: 'Nigeria'
    },
    {
      code: 'KE',
      currency: 'KES',
      currencyName: '',
      country: 'Kenya'
    },
    {
      code: 'UG',
      currency: 'UGX',
      currencyName: '',
      country: 'Uganda'
    },
    {
      code: 'RW',
      currency: 'RWF',
      currencyName: '',
      country: 'Rwanda'
    },
    {
      code: 'TZ',
      currency: 'TZS',
      currencyName: '',
      country: 'Tanzania'
    },
    {
      code: 'ZA',
      currency: 'ZAR',
      currencyName: '',
      country: 'South Africa'
    },
    {
      code: 'CM',
      currency: 'XAF',
      currencyName: '',
      country: 'Cameroon'
    },
    {
      code: 'GH',
      currency: 'GHS',
      currencyName: '',
      country: 'Ghana'
    }
  ];

  const billHype = () => {
      const appState = {item:"",country:""};
      const formatAsMoney = (amount, buyerCountry) => {
          let currSymbol = amount.toLocaleString(countries[i].currency);
          let currCountry = buyerCountry.toLocaleString(countries[i].country);
          if (!currCountry){
              buyerCountry.toLocaleString(countries[0].country);
          }
      }		

    const detectCardType = (first4Digits) => {

    }

    const validateCardExpiryDate = () => {

    }

    const validateCardHolderName = () => {

    }

    const uiCanInteract = () => {

    }

    const displayCartTotal = ({results}) => {
    const [data] =  results;
    const {itemsInCart,buyerCountry} = data;
    const {name,price,qty} = itemsInCart;
    console.log(name);
    console.log(price);
    console.log(qty);
    appState.item = itemsInCart;
    appState.country = buyerCountry;
    const pricing = itemsInCart[0].price;
    const pricing1 = itemsInCart[1].price;
    const quantity = itemsInCart[0].qty;
    const quantity1 = itemsInCart[1].qty;
    const subTotal = pricing*quantity;
    const subTotal1 = pricing1*quantity1;
    const finalTotal = [];
    finalTotal.push(subTotal);
    finalTotal.push(subTotal1);
    const sumBill = finalTotal.reduce((previousValue, item) => {return previousValue 		+ item})
      sumBill = appState.bill;
    appState.billFormatted = formatAsMoney(appState.bill,appState.country);
    document.querySelector("[data-bill]").textContent = appState.billFormatted;
    appState.cardDigits = [];
    uiCanInteract();
    }


    const billDisplay = document.querySelector('.mdc-typography--headline4');
    if (!billDisplay) return;

    billDisplay.addEventListener('click', () => {
      const billSpan = document.querySelector("[data-bill]");		
      if (billSpan &&
        appState.bill &&
        appState.billFormatted &&
        appState.billFormatted === billSpan.textContent) {
        window.speechSynthesis.speak(
          new SpeechSynthesisUtterance(appState.billFormatted)
        );
      }
    });
  };
 
  
  const fetchBill = () => {
    const apiHost = 'https://randomapi.com/api';
    const apiKey = '006b08a801d82d0c9824dcfdfdfa3b3c';
    const apiEndpoint = `${apiHost}/${apiKey}`;		
    fetch(apiEndpoint)
    .then(response =>{ throw Error (response.statusText)
        return response.json()
    })
    .then (data => displayCartTotal(data))        
  };
  
  const startApp = () => {
      fetchBill();
  };

  startApp();