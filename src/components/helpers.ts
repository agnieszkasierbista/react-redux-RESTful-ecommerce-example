export function getTabLink(name:string) {
    if(name === "all") {
        return "/"
    } else {
        return `categories/${name}`
    }
}