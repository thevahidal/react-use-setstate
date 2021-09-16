// Credits: https://stackoverflow.com/a/7356528/1930464
export const isFunction = (func) => {
    return func && {}.toString.call(func) === '[object Function]';
}