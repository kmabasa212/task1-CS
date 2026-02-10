const jobs = [
    { category: "Research", title: "Math Researcher", desc: "Research in algebra and number theory." },
    { category: "Teaching", title: "Math Teacher", desc: "Teach calculus and algebra." },
    { category: "Internship", title: "Data Analyst", desc: "Use statistics with real data." },
    { category: "Industry", title: "Quant Analyst", desc: "Make math models for finance." },
    { category: "Industry", title: "Actuary", desc: "Calculate risk for insurance." },
    { category: "Research", title: "Applied Math", desc: "Solve engineering problems." }
];

const displayJobs = () => {
    const container = document.getElementById("job-container");
    container.innerHTML = "";

    jobs.forEach(job => {
        container.innerHTML += `
            <div class="job">
                <div class="t">${job.category}</div>
                <h3>${job.title}</h3>
                <p>${job.desc}</p>
            </div>
        `;
    });
};

document.getElementById("load-btn").addEventListener("click", displayJobs);