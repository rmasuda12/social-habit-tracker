import './FriendCard.scss';
import Chart from "react-apexcharts";

function FriendCard({friend}) {
    const chartOptions = {
        chart: {
        type: 'radialBar',
        height: '100%',
        width: '100%',
        sparkline: {
            enabled: true, // Removes extra space for toolbars and axes
        },
        },
        plotOptions: {
          radialBar: {
            offsetX: 0,
            offsetY: 0,
            track: {
                margin: 0
            },
            hollow: {
              size: '40%', // Adjust the hollow size of the center
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
    console.log(friend);
    return(
        <>
        <article className='friend__card'>

           
            <div className='friend__container'>           
                <div className='friend__image-container'>
                    <img className='friend__image' src={friend.profile} alt='picture of user'/>
                </div>
            <div>
                <p className='friend__name'>{friend.friend_name}</p>
                <p className='friend__stats'>{friend.completion}%</p>
            </div>
           
            </div>
            <div className={'friend__chart'}>
             <Chart options={chartOptions} series={series} type="radialBar" height={500} />
            </div>
        </article>
        </>
    )
}

export default FriendCard;