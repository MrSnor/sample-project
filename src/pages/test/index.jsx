
import { faker } from '@faker-js/faker';


import {
  Area,
  AreaChart,
  CartesianGrid,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts';

const data = [
  {
    name: 'Page A',
    uv: 0,
    pv: 2400,
    amt: faker.number.int({ min: 0, max: 2000 }),
  },
  {
    name: 'Page B',
    uv: 1000,
    pv: 1398,
    amt: faker.number.int({ min: 0, max: 2000 }),
  },
  {
    name: 'Page C',
    uv: 2000,
    pv: 9800,
    amt: faker.number.int({ min: 0, max: 2000 }),
  },
  {
    name: 'Page D',
    uv: 3000,
    pv: 3908,
    amt: faker.number.int({ min: 0, max: 2000 }),
  },
  {
    name: 'Page E',
    uv: 4000,
    pv: 4800,
    amt: faker.number.int({ min: 0, max: 2000 }),
  },
  {
    name: 'Page F',
    uv: 5000,
    pv: 3800,
    amt: faker.number.int({ min: 0, max: 2000 }),
  },
  {
    name: 'Page G',
    uv: 6000,
    pv: 4300,
    amt: faker.number.int({ min: 0, max: 2000 }),
  },
];

function Test() {
  return (
    <div>
      test
      <div className="bg-white w-[50rem] h-[40rem]">
        <AreaChart
          width={500}
          height={400}
          data={data}
          margin={{
            top: 10,
            right: 30,
            left: 0,
            bottom: 0,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Area
            type="monotone"
            dataKey="uv"
            stackId="1"
            stroke="#8884d8"
            fill="#8884d8"
          />
          {/* <Area
            type="monotone"
            dataKey="pv"
            stackId="1"
            stroke="#82ca9d"
            fill="#82ca9d"
          /> */}
          <Area
            type="monotone"
            dataKey="amt"
            stackId="1"
            stroke="#ffc658"
            fill="#ffffff"
          />
        </AreaChart>
      </div>
    </div>
  );
}

export default Test;
