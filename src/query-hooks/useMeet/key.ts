const meetKey = {
    all: () => ['meet'],
    // 특정 미팅에 대한 key
    specificMeet: (id: number) => [...meetKey.all(), { id }]
};

export { meetKey };
