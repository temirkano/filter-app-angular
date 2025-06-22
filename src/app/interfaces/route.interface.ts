export interface Route {
  uuid: string;
  address: string;
  mask: string;
  gateway: string;
  interface: string;
}

export const ipData: Route[] = [
  {
    address: '0.0.0.0',
    gateway: '193.0.174.1',
    interface: 'Подключение Ethernet',
    uuid: '',
    mask: '',
  },
  {
    address: '10.1.30.24',
    gateway: '0.0.0.0',
    interface: 'Локальная сеть',
    uuid: '',
    mask: '',
  },
  {
    address: '192.168.1.0/24',
    gateway: '0.0.0.0',
    interface: 'Локальная сеть',
    uuid: '',
    mask: '',
  },
  {
    address: '193.0.174.0/24',
    gateway: '0.0.0.0',
    interface: 'Подключение Ethernet',
    uuid: '',
    mask: '',
  },
  {
    address: '198.0.175.0/25',
    gateway: '193.0.174.10',
    interface: 'Подключение Ethernet',
    uuid: '',
    mask: '',
  },
  {
    address: '198.0.175.22/32',
    gateway: '193.0.174.1',
    interface: 'Подключение Ethernet',
    uuid: '',
    mask: '',
  },
  {
    address: '174.0.195.22/00',
    gateway: '193.0.174.1',
    interface: 'Ethernet',
    uuid: '',
    mask: '',
  },
];
