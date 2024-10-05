/* eslint-disable react/react-in-jsx-scope */
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import colors from 'tailwindcss/colors';
import { ResponsiveContainer, PieChart, Pie, Cell } from 'recharts';
import { BarChart } from 'lucide-react';

const data = [
  { product: 'Mussarela', amount: 12 },
  { product: 'Peperoni', amount: 12 },
  { product: 'Frango', amount: 80 },
  { product: 'Calabresa', amount: 15 },
  { product: 'Portuguesa', amount: 20 },
  { product: 'Moda', amount: 52 },
  { product: 'Chocolate', amount: 10 },
];

const COLORS = [
  colors.red[500],
  colors.green[500],
  colors.blue[500],
  colors.yellow[500],
  colors.purple[500],
  colors.orange[500],
  colors.pink[500],
];

export function PopularProductsChart() {
  return (
    <Card className="col-span-3">
      <CardHeader className="pb-8">
        <div className="flex items-center justify-between">
          <CardTitle className="text-base font-medium">
            Produtos populares
          </CardTitle>
          <BarChart className="y-4 w-4 text-muted-foreground" />
        </div>
      </CardHeader>
      <CardContent>
        <ResponsiveContainer width="100%" height={240}>
          <PieChart style={{ fontSize: 12 }}>
            <Pie
              data={data}
              dataKey="amount"
              cx="50%"
              cy="50%"
              outerRadius={80}
              labelLine={false}
              label={({
                cx,
                cy,
                midAngle,
                innerRadius,
                outerRadius,
                value,
                index,
              }) => {
                const RADIAN = Math.PI / 180;
                const radius = 12 + innerRadius + (outerRadius - innerRadius);
                const x = cx + radius * Math.cos(-midAngle * RADIAN);
                const y = cy + radius * Math.sin(-midAngle * RADIAN);

                return (
                  <text
                    x={x}
                    y={y}
                    className="fill-muted-foreground text-xs"
                    textAnchor={x > cx ? 'start' : 'end'}
                    dominantBaseline="central"
                  >
                    {data[index].product.length > 12
                      ? data[index].product.substring(0, 12).concat('...')
                      : data[index].product}{' '}
                    ({value})
                  </text>
                );
              }}
            >
              {data.map((entry, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={COLORS[index % COLORS.length]}
                />
              ))}
            </Pie>
          </PieChart>{' '}
        </ResponsiveContainer>
      </CardContent>
    </Card>
  );
}
