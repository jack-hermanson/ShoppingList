
export const scrollIntoView = (id: string) => {
    document.getElementById(id)?.scrollIntoView({behavior: "smooth"});
};
