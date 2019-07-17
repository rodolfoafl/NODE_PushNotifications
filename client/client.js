const publicVapidKey = "BOCMtr2Mo0k6QJ6Hf8J0MjwMMIh4ovi4WQj6LT1Kge-Fkt0p7-4OOX-9qOGIq1iZoyQuhOSU4JatqGliSe6HT1Q";

//Check for service worker
if('serviceWorker' in navigator){
    send().catch(err => console.error(err));
}


//Register SW, Register Push, Send Push
async function send(){
    
    //Register SW
    console.log('Registering service worker');
    const register = await navigator.serviceWorker.register('/worker.js', {
        scope: '/'
    });
    console.log('Service Woker Registered');

    //Register Push
    console.log('Registering Push');
    const subscription = await register.pushManager.subscribe({
        userVisibleOnly: true,
        applicationServerKey: urlBase64ToUint8Array(publicVapidKey)
    });
    console.log('Push Registered');

    //Send Push Notifications
    console.log('Sending Push');
    await fetch('/subscribe', {
        method: 'POST',
        body: JSON.stringify(subscription),
        headers: {
            'content-type': 'application/json'
        }
    });
    console.log('Push Sent');
}

function urlBase64ToUint8Array(base64String) {
    const padding = '='.repeat((4 - base64String.length % 4) % 4);
    const base64 = (base64String + padding)
      .replace(/-/g, '+')
      .replace(/_/g, '/');
  
    const rawData = window.atob(base64);
    const outputArray = new Uint8Array(rawData.length);
  
    for (let i = 0; i < rawData.length; ++i) {
      outputArray[i] = rawData.charCodeAt(i);
    }
    return outputArray;
  }