interface Time {
    year: string;
    month: string;
    day: string;
    time: string;
}

export const getTime = (): Time => {
    const date = new Date(); // 현재 시간을 나타내는 Date 객체 생성
    const options: Intl.DateTimeFormatOptions = {
        year: 'numeric',
        month: 'numeric',
        day: 'numeric',
        hour: 'numeric',
        minute: 'numeric',
        timeZone: 'Asia/Seoul'
    };
    const koreanDate = new Intl.DateTimeFormat('ko-KR', options).format(date); // 한국 시간으로 변경

    const [year, month, day, time] = koreanDate.split('.').map((v) => v.trim()); // 년, 월, 일, 시간 분리

    return {
        year: year,
        month: month,
        day: day,
        time: time
    };
};
