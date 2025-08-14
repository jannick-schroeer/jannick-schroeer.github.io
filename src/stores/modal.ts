import {defineStore} from "pinia";
import {ref} from "vue";

export const useModalStore = defineStore('modals', () => {
    const aboutMe = ref(true);
    const projects = ref(false);
    const skills = ref(false);

    function openAboutMe() {
        aboutMe.value = true;
        projects.value = false;
        skills.value = false;
    }
    function openProjects() {
        aboutMe.value = false;
        projects.value = true;
        skills.value = false;
    }
    function openSkills() {
        aboutMe.value = false;
        projects.value = false;
        skills.value = true;
    }

    return {
        aboutMe,
        projects,
        skills,
        openAboutMe,
        openProjects,
        openSkills
    }
})