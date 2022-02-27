import React from 'react'

const Level1 = () => {
    return(
        <div>
            <h1>Level 1</h1>
            <p><b>Challenge:</b> complete a grid with
            3 columns and multiple rows</p>

            <section className="level1-grid">

                <div className='level1-grid-card'>
                    <img src="https://natashaskitchen.com/wp-content/uploads/2020/05/Vanilla-Cupcakes-3.jpg" alt="cupcake"></img>
                    <h3>Sprinkle Cupcake</h3>
                </div>

                <div className='level1-grid-card'>
                    <img src="https://cdn.sallysbakingaddiction.com/wp-content/uploads/2017/06/moist-chocolate-cupcakes-5.jpg" alt="cupcake"></img>
                    <h3>Chocolate Cupcake</h3>
                </div>

                <div className='level1-grid-card'>
                    <img src="https://www.justsotasty.com/wp-content/uploads/2021/03/Small-Batch-Vanilla-Cupcakes-3.jpg" alt="cupcake"></img>
                    <h3>Strawberry Cupcake</h3>
                </div>

                <div className='level1-grid-card'>
                    <img src="https://thescranline.com/wp-content/uploads/2021/03/Dancing-Queen-Cupcakes.jpg" alt="cupcake"></img>
                    <h3>Rainbow Cupcake</h3>
                </div>

            </section>
        </div>
    )
}
export default Level1