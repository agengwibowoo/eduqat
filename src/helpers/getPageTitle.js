function getPageTitle(pathname) {
    let title = pathname.split("/").slice(1)?.join(" ");
    title = title === "" ? "Home" : title;
    return title;
}

export default getPageTitle;
