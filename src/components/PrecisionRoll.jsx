
import { Cell, Label, Pie, PieChart } from 'recharts';
import '../index.css';


function PrecisionRoll(props) {
    const {R,title}=props
    const data = [{ value: R }, { value: 100 - R }, { value: 1 }];
  return (
    <div className="score">
        <h2>{title}</h2>
        <PieChart width={100} height={100}>
            <Pie
                data={data}
                cx="50%"
                cy="50%"
                dataKey="value"
                innerRadius={30}
                outerRadius={38}
                >
                  {data.map((entry, index) => {
                  if (index === 1 || index === 2) {
                    return <Cell key={`cell-${index}`} fill="#f3f6f9"
                    />;
                  }
                  return <Cell key={`cell-${index}`} fill="green"
                        
                  />;
                })}
                  <Label
                  value={data[0].value + "%"}
                  position="center"
                  fill="#3C70FF"
                  style={{
                  fontSize: "17px",
                  fontWeight: "bold",
                  fontFamily: "Roboto",
                  }}/>
            </Pie>
        </PieChart>
    </div>
  );
}

export default PrecisionRoll;
