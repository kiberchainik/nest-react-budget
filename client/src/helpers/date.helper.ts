export const formatDate = (data: string):string => {
    const event = new Date(data);
    const options = {
    month: 'long',
    year: 'numeric',
    day: 'numeric',
    };

    return event.toLocaleDateString(undefined, options as any)
}