// Konfigurasi base URL API
const API_BASE = '/.netlify/functions';

// Fungsi untuk panggil endpoint
async function testEndpoint(endpoint) {
    let url = '';
    let responseElement = '';
    
    switch(endpoint) {
        case 'ai-chatgpt':
            const text = document.getElementById('chatgpt-text').value;
            const key = document.getElementById('chatgpt-key').value;
            url = `${API_BASE}/ai-chatgpt?text=${encodeURIComponent(text)}&key=${encodeURIComponent(key)}`;
            responseElement = 'response-ai-chatgpt';
            break;
            
        case 'tools-removebg':
            const imgUrl = document.getElementById('removebg-url').value;
            url = `${API_BASE}/tools-removebg?url=${encodeURIComponent(imgUrl)}`;
            responseElement = 'response-tools-removebg';
            break;
            
        case 'anime-search':
            const search = document.getElementById('anime-search').value;
            url = `${API_BASE}/anime-search?search=${encodeURIComponent(search)}`;
            responseElement = 'response-anime-search';
            break;
            
        case 'random-pap':
            url = `${API_BASE}/random-pap`;
            responseElement = 'random-pap';
            break;
    }
    
    // Tampilkan loading
    const responseDiv = document.getElementById(responseElement);
    if (responseDiv) {
        responseDiv.textContent = 'Loading...';
    }
    
    try {
        const res = await fetch(url);
        const data = await res.json();
        
        if (responseElement === 'random-pap') {
            // Tampilkan gambar untuk random pap
            document.getElementById('response-random-pap').innerHTML = 
                `<img src="${data.url}" style="max-width: 300px; border-radius: 12px;">`;
        } else {
            document.getElementById(responseElement).textContent = 
                JSON.stringify(data, null, 2);
        }
    } catch (error) {
        if (responseElement !== 'random-pap') {
            document.getElementById(responseElement).textContent = 
                `Error: ${error.message}`;
        } else {
            document.getElementById('response-random-pap').innerHTML = 
                `Error: ${error.message}`;
        }
    }
}

// Navigasi sidebar
document.querySelectorAll('.nav a').forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        
        // Hapus active class dari semua section
        document.querySelectorAll('.section').forEach(section => {
            section.classList.remove('active');
        });
        
        // Hapus active class dari nav links
        document.querySelectorAll('.nav li').forEach(li => {
            li.classList.remove('active');
        });
        
        // Active parent li
        link.parentElement.classList.add('active');
        
        // Tampilkan section yang dipilih
        const sectionId = link.getAttribute('data-section') || 
                         `endpoint-${link.getAttribute('data-endpoint')}`;
        const targetSection = document.getElementById(sectionId);
        if (targetSection) {
            targetSection.classList.add('active');
        }
    });
});