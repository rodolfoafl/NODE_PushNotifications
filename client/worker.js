console.log('Service Worker Loaded');

self.addEventListener('push', e => {
    const data = e.data.json();
    console.log('Push Received');
    self.registration.showNotification(data.title, {
        body: 'Notified by <R.A.F.L>',
        icon: 'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/a75b3280-49e7-4912-a2a3-15aea49e13fc/d1r3fc8-74bfe9f8-c6fb-42e1-b81a-e30d3f7e9fb3.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcL2E3NWIzMjgwLTQ5ZTctNDkxMi1hMmEzLTE1YWVhNDllMTNmY1wvZDFyM2ZjOC03NGJmZTlmOC1jNmZiLTQyZTEtYjgxYS1lMzBkM2Y3ZTlmYjMucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.AS0FJx-2w0OkRYAuJmSke7CU6l0h5XZLmDxmdFLLEOk'
    });
});