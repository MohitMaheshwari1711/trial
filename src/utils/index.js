export const isMobileBrowser = () => {
    if (typeof window !== "undefined") {
        if (navigator.userAgent.match(/Android/i)) {
            return "Android"
        }
        if (navigator.userAgent.match(/iPhone|iPad|iPod/i)) {
            return "iOS"
        }
        return false
    }
    return false
}