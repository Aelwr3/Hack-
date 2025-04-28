// Elements
const realFileBtn = document.getElementById('real-file');
const customBtn = document.getElementById('custom-button');
const fileName = document.getElementById('file-name');
const analyzingSection = document.querySelector('.analyzing-section');
const resultsSection = document.querySelector('.results-section');

// Event Listeners
customBtn.addEventListener('click', () => {
    realFileBtn.click();
});

realFileBtn.addEventListener('change', function() {
    if (this.files[0]) {
        fileName.textContent = this.files[0].name;
        startAnalysis();
    }
});

function startAnalysis() {
    // Hide upload section
    document.querySelector('.upload-section').classList.remove('active');
    
    // Show analyzing section
    analyzingSection.style.display = 'flex';
    
    // Start fake analysis
    let percent = 0;
    const progressBar = document.querySelector('.progress');
    const percentageText = document.querySelector('.percentage');
    
    const analysisInterval = setInterval(() => {
        percent += (100 / 30); // 30 seconds total
        progressBar.style.width = percent + '%';
        percentageText.textContent = Math.floor(percent) + '%';
        
        if (percent >= 100) {
            clearInterval(analysisInterval);
            showResults();
        }
    }, 1000);
}

function showResults() {
    analyzingSection.style.display = 'none';
    resultsSection.style.display = 'block';
    
    // Set current time
    document.getElementById('time').textContent = new Date().toLocaleString();
    
    // Add fake data dynamically
    const resultsContent = `
    <div class="result-box">
        <div class="info-item">
            <label>IP Address:</label>
            <span>192.168.45.123</span>
        </div>
        <div class="info-item">
            <label>Device:</label>
            <span>iPhone 14 Pro Max</span>
        </div>
        <div class="info-item">
            <label>Location:</label>
            <iframe src="https://maps.google.com/maps?q=34.0209,-6.8416&z=15&output=embed" 
                    width="100%" 
                    height="200" 
                    frameborder="0" 
                    style="border:0; margin-top:10px;">
            </iframe>
        </div>
    </div>
    `;
    
    document.querySelector('.results-section').innerHTML += resultsContent;
}