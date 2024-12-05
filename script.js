
const under50000Colleges = [
    {
        name: "Bhopal Institute of Technology",
        fee: "₹45,000/year",
        placementRate: "20%",
        website: "https://www.bitbhopal.ac.in",
        image: "images/bhopal_institute.jpg"
    },
    {
        name: "Corporate University Bhopal",
        fee: "₹48,000/year",
        placementRate: "25%",
        website: "https://www.corporateuniversity.ac.in",
        image: "images/corporate_university.jpg"
    },
    {
        name: "Bhabha University",
        fee: "₹50,000/year",
        placementRate: "20%",
        website: "https://www.bhabhauniversity.edu.in",
        image: "images/bhabha_university.jpg"
    },
    {
        name: "Swami Vivekanand University",
        fee: "₹49,000/year",
        placementRate: "30%",
        website: "https://www.svnu.edu.in",
        image: "images/swami_vivekanand.jpg"
    },
    {
        name: "Truba Institute of Technology",
        fee: "₹50,000/year",
        placementRate: "35%",
        website: "https://www.trubainstitute.ac.in",
        image: "images/truba_institute.jpg"
    }
];

const under60000Colleges = [
    {
        name: "Lakshmi Narain College of Technology",
        fee: "₹60,000/year",
        placementRate: "70%",
        website: "https://www.lnct.ac.in",
        image: "images/lakshmi_narain.jpg"
    },
    {
        name: "Sagar Institute of Research and Technology",
        fee: "₹55,000/year",
        placementRate: "50%",
        website: "https://www.sirtbhopal.ac.in",
        image: "images/sagar_institute.jpg"
    },
    {
        name: "OIST Bhopal",
        fee: "₹59,000/year",
        placementRate: "55%",
        website: "https://www.oistbhopal.edu.in",
        image: "images/oist_bhopal.jpg"
    },
    {
        name: "SISTEC Bhopal",
        fee: "₹55,000/year",
        placementRate: "60%",
        website: "https://www.sistec.ac.in",
        image: "images/sistec_bhopal.jpg"
    },
    {
        name: "Sage University Bhopal",
        fee: "₹60,000/year",
        placementRate: "70%",
        website: "https://www.sageuniversity.in",
        image: "images/sage_university.jpg"
    }
];

// Function to render college lists
function renderColleges(category) {
    const listElement = document.getElementById(`${category}-list`);
    const colleges = category === 'under50000' ? under50000Colleges : under60000Colleges;
    
    listElement.innerHTML = ''; // Clear previous list
    colleges.forEach(college => {
        const listItem = document.createElement('li');
        listItem.innerHTML = `
            <img src="${college.image}" alt="${college.name}">
            <div>
                <h4>${college.name}</h4>
                <p>Fee: ${college.fee}</p>
                <p>Placement Rate: ${college.placementRate}</p>
                <a href="${college.website}" target="_blank">Official Website</a>
            </div>
        `;
        listElement.appendChild(listItem);
    });
}

// Function to show category based on button click
function showCategory(category) {
    // Hide both categories initially
    document.getElementById("under50000").style.display = "none";
    document.getElementById("under60000").style.display = "none";

    // Show the selected category
    document.getElementById(category).style.display = "block";
    
    // Render the colleges for the selected category
    renderColleges(category);
}

// Function to search colleges
function searchCollege() {
    const searchTerm = document.getElementById('search-bar').value.toLowerCase();
    const filteredUnder50000 = under50000Colleges.filter(col
