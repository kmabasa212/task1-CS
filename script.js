const user = "Khomisani";

const opportunities = [
    { title: "Maths Olympiad", info: "National competition for students" },
    { title: "University Scholarship", info: "Full funding for Math majors" },
    { title: "Summer Research", info: "Paid 8-week math project" },
    { title: "Tutoring Role", info: "Help high school students online" }
];

const loadOpportunities = () => {
    const grid = document.getElementById("container-grid");
    grid.innerHTML = "";

    opportunities.forEach(item => {
        grid.innerHTML += `
            <div class="opportunity-card">
                <h3>${item.title}</h3>
                <p>${item.info}</p>
            </div>
        `;
    });
};

document.getElementById("load-btn").addEventListener("click", loadOpportunities);