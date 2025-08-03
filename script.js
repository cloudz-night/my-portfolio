function skillsToggle() {
    const skillsPane = document.getElementById('skills-pane');
    const skillsContent = document.getElementById('skills-content');
    if (skillsContent.style.top === '-50%') {
        skillsContent.style.pointerEvents = 'auto';
        skillsContent.style.top = '50%';
        skillsPane.style.backdropFilter = 'blur(8px)';
        skillsPane.style.backgroundColor = 'rgba(26, 18, 36, 0.6)'
    }   else {
        skillsContent.style.pointerEvents = 'none';
        skillsContent.style.top = '-50%';
        skillsPane.style.backdropFilter = 'blur(0px)';
        skillsPane.style.backgroundColor = 'transparent';
    }
}
