import Card from './Card'

export default function CardContainer(){
    return(
        <div className ="CardContainer"> 
            <Card pic="src/assets/pexels-the-glorious-studio-10475791.jpg" title="Ice Lake" price ="$899" onSale={true} info={["Round cut ","White Gold ", "2022 Collection"]}/>
            <Card pic="src/assets/pexels-the-glorious-studio-10475793.jpg" title="Princess" price ="1090"onSale={false}/>
            <Card pic="src/assets/pexels-the-glorious-studio-10475794.jpg" title="Swan" price ="1890"onSale={true}/>

        </div>
    )
}