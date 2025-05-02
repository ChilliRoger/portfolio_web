document.addEventListener('DOMContentLoaded', () => {
    // Removed comic-style animation to text elements
    // const textElements = document.querySelectorAll('h1, h2, p');
    // textElements.forEach(element => {
    //     element.style.animation = 'bounce 0.5s ease infinite';
    // });

    // Removed comic-style animation to buttons
    // const buttons = document.querySelectorAll('.cta');
    // buttons.forEach(button => {
    //     button.addEventListener('mouseover', () => {
    //         button.style.transform = 'scale(1.2) rotate(5deg)';
    //     });
    //     button.addEventListener('mouseout', () => {
    //         button.style.transform = 'scale(1) rotate(0deg)';
    //     });
    // });

    if (window.location.pathname.includes('projects.html')) {
        fetch('https://api.github.com/users/ChilliRoger/repos')
            .then(response => response.json())
            .then(data => {
                const projectContainer = document.getElementById('project-container');
                data.forEach(repo => {
                    const projectCard = document.createElement('div');
                    projectCard.className = 'project-card';
                    projectCard.innerHTML = `
                        <h3>${repo.name} 🚀</h3>
                        <p>${repo.description || 'No description available'} 📝</p>
                        <a href="${repo.html_url}" target="_blank">View on GitHub 🐙</a>
                    `;
                    projectContainer.appendChild(projectCard);
                });
            })
            .catch(error => {
                console.error('Error fetching GitHub repos:', error);
                document.getElementById('project-container').innerHTML = '<p>Unable to load projects at this time. 😢</p>';
            });
    }
});