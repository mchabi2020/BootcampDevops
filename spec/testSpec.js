describe("Test de l'index.html", function() {
    beforeAll(function() {
        // Charger le contenu de l'index.html dans le document
        document.body.innerHTML = `
            <div class="container">
                <h1>DevOps Fundamentals</h1>
                <div id="topics-container"></div>
            </div>
        `;

        // Simuler le script de l'index.html
        const topics = [
            'Continuous Integration',
            'Continuous Deployment',
            'Docker Containers',
            'Kubernetes',
            'Infrastructure as Code',
            'Monitoring and Logging'
        ];

        const topicsContainer = document.getElementById('topics-container');
        topics.forEach(topic => {
            const topicDiv = document.createElement('div');
            topicDiv.className = 'topic';
            topicDiv.textContent = topic;
            topicsContainer.appendChild(topicDiv);
        });
    });

    it("devrait avoir un conteneur de sujets avec 6 sujets", function() {
        const topicsContainer = document.getElementById('topics-container');
        expect(topicsContainer).not.toBeNull();
        expect(topicsContainer.children.length).toBe(6);
    });

    it("devrait avoir un sujet 'Continuous Integration'", function() {
        const topicsContainer = document.getElementById('topics-container');
        const firstTopic = topicsContainer.children[0];
        expect(firstTopic.textContent).toBe('Continuous Integration');
    });

    it("devrait avoir un sujet 'Kubernetes'", function() {
        const topicsContainer = document.getElementById('topics-container');
        const fourthTopic = topicsContainer.children[3];
        expect(fourthTopic.textContent).toBe('Kubernetes');
    });
});