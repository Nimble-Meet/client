import { BsPeopleFill } from 'react-icons/bs';
import { FiActivity } from 'react-icons/fi';
import { RiChatSmileFill } from 'react-icons/ri';

const EXPLANE = [
    {
        title: 'Meeting Invitation',
        description:
            '링크로 간단하게 초대장을 보내 \n 편리하게 회의를 진행해보세요.',
        icon: BsPeopleFill,
        delay: 0
    },
    {
        title: 'Ice Breaking',
        description:
            'Nimble 회의실 내부 미니게임을 활용해\n회의를 더욱 즐겁게 진행해보세요.',
        icon: RiChatSmileFill,
        delay: 0.1
    },
    {
        title: 'Meeting Analysis',
        description:
            'Nimble만의 회의 분석 기능을 통해\n회의를 더욱 효율적으로 진행해보세요.',
        icon: FiActivity,
        delay: 0.2
    }
];

const PRICING = [
    {
        type: 'Free',
        description: '간단한 회의를 위한',
        benefits: [
            '최대 30명 참가할 수 있는 회의',
            '최대 40분 동안 무제한 회의 가능',
            '협업을 위한 팀 채팅',
            '회의실 내 미니게임 일부 이용 가능'
        ],
        price: '0',
        disabled: false,
        delay: 0
    },
    {
        type: 'Basic',
        description: '직원 100명 이상 기업을 위한',
        benefits: [
            '최대 100명 참가할 수 있는 회의',
            '최대 120분 동안 무제한 회의 가능',
            '협업을 위한 팀 채팅',
            '회의실 내 미니게임 전체 이용 가능'
        ],
        price: '4',
        disabled: true,
        delay: 0.1
    },
    {
        type: 'Premium',
        description: '직원 300명 이상 기업을 위한',
        benefits: [
            '최대 300명 참가할 수 있는 회의',
            '최대 360분 동안 무제한 회의 가능',
            '협업을 위한 팀 채팅',
            '회의실 내 미니게임 전체 이용 가능'
        ],
        price: '8',
        disabled: true,
        delay: 0.2
    }
];

export default { EXPLANE, PRICING };
