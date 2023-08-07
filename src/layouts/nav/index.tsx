// ** Icon Imports
import ManageAccountsIcon from '@mui/icons-material/ManageAccounts'
import AssignmentIndIcon from '@mui/icons-material/AssignmentInd'
import SettingsAccessibilityIcon from '@mui/icons-material/SettingsAccessibility'
import RecentActorsIcon from '@mui/icons-material/RecentActors'
import PortraitIcon from '@mui/icons-material/Portrait'
import EmailIcon from '@mui/icons-material/Email'
import SendIcon from '@mui/icons-material/Send'
import SendToMobileIcon from '@mui/icons-material/SendToMobile'
import SdCardIcon from '@mui/icons-material/SdCard'
import GavelIcon from '@mui/icons-material/Gavel'
import HubIcon from '@mui/icons-material/Hub'
import HowToRegIcon from '@mui/icons-material/HowToReg'
import DevicesFoldIcon from '@mui/icons-material/DevicesFold'
import BallotIcon from '@mui/icons-material/Ballot'
import BrowserUpdatedIcon from '@mui/icons-material/BrowserUpdated'
import PersonPinIcon from '@mui/icons-material/PersonPin'
import PermContactCalendarIcon from '@mui/icons-material/PermContactCalendar'
import FaceIcon from '@mui/icons-material/Face'
import QueuePlayNextIcon from '@mui/icons-material/QueuePlayNext'

const navListItem = [
  {
    listIcon: <ManageAccountsIcon />,
    listText: '회원 관리',
    href: '/user',
    subMenuItems: [
      {
        listIcon: <AssignmentIndIcon />,
        listText: '사용자 조회',
        href: '/user',
      },
      {
        listIcon: <SettingsAccessibilityIcon />,
        listText: '활성화 관리',
        href: '/user/active',
      },
      {
        listIcon: <RecentActorsIcon />,
        listText: '고객 현황',
        href: '/user/chart',
      },
      {
        listIcon: <PortraitIcon />,
        listText: '회원 기록 관리',
        href: '/user/history',
      },
    ],
    isSubMenuOpen: false,
  },
  {
    listIcon: <SendIcon />,
    listText: '발송 관리',
    href: '/push',
    subMenuItems: [
      {
        listIcon: <EmailIcon />,
        listText: '메일 발송',
        href: '/push/mail',
      },
      {
        listIcon: <SendToMobileIcon />,
        listText: '푸시 발송',
        href: '/push',
      },
      {
        listIcon: <SdCardIcon />,
        listText: '로그 관리',
        href: '/push/log',
      },
    ],
    isSubMenuOpen: false,
  },
  {
    listIcon: <GavelIcon />,
    listText: '정책 설정',
    href: '/policy',
    subMenuItems: [
      {
        listIcon: <HubIcon />,
        listText: '기본 정책',
        href: '/policy',
      },
      {
        listIcon: <HowToRegIcon />,
        listText: 'User Guide',
        href: '/policy/guide',
      },
      {
        listIcon: <BallotIcon />,
        listText: '앱 버전 설정',
        href: '/policy/version',
      },
    ],
    isSubMenuOpen: false,
  },
  {
    listIcon: <DevicesFoldIcon />,
    listText: '펌웨어 관리',
    href: '/firmware',
    subMenuItems: [
      {
        listIcon: <BrowserUpdatedIcon />,
        listText: '펌웨어 관리',
        href: '/firmware',
      },
      {
        listIcon: <BrowserUpdatedIcon />,
        listText: '업데이터 관리',
        href: '/firmware/update',
      },
    ],
    isSubMenuOpen: false,
  },
  {
    listIcon: <PersonPinIcon />,
    listText: '관리자 설정',
    href: '/admin',
    subMenuItems: [
      {
        listIcon: <PermContactCalendarIcon />,
        listText: '관리자 운영 활동',
        href: '/admin/history',
      },
      {
        listIcon: <FaceIcon />,
        listText: '관리자 계정',
        href: '/admin',
      },
      {
        listIcon: <QueuePlayNextIcon />,
        listText: '모델 등록',
        href: '/admin/device',
      },
    ],
    isSubMenuOpen: false,
  },
]

export default navListItem
