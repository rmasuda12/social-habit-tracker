import './FriendCard.scss';
import Chart from "react-apexcharts";

function FriendCard({friend}) {
    const chartOptions = {
        chart: {
        type: 'radialBar',
        // height: '100%', // Set your desired chart height
        // width:'100%',  // Set your desired chart width
        },
        plotOptions: {
          radialBar: {
            track: {
                margin: 0
            },
            hollow: {
              size: '60%', // Adjust the hollow size of the center
            },
            dataLabels: {
              show: false,
            },
          },
        },
        stroke: {
            lineCap: 'butt', // Optional: 'round' or 'butt' for aesthetic
            width: 0.1 // Adjust width as needed
          },
        colors: ['#20E647'], // Customize the color of the radial bar
      };
    
      const series = [friend.completion];
    return(
        <>
        <article className='friend__card'>
            <div>
            <p className='friend__name'>{friend.friend_name}</p>
            <p className='friend__stats'>{friend.completion}%</p>
            </div>
            <div className={'friend__chart'}>
             <Chart options={chartOptions} series={series} type="radialBar" height={350} />
            </div>
        </article>
        </>
    )
}

export default FriendCard;