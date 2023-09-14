const userKey = {
    all: () => ['user'],
    // 유저 정보 관련 key
    info: (email: string) => [...userKey.all(), { email }]
};

export { userKey };
