# Mod 4 Practice Code Challenge: Sushi Saga
**Here's what it should look like:**

![Sushi Saga](https://raw.githubusercontent.com/learn-co-curriculum/React-Practice-Code-Challenge/master/sushi-saga-demo.gif)

### Server
1. Navigate to `sushi-saga-client` and run `json-server --watch db.json`
2. Navigate to `http://localhost:3000/sushis` to confirm delivery of sushi!


### Client
This will be located within the `sushi-saga-client` directory of this repo. 

The component hierarchy should be as follows:
- `App` is parent to both `SushiContainer` and `Table`
- `SushiContainer` is parent to both `Sushi` and `MoreButton`

Be sure to read all of the notes in the all of the components before getting started! They will give you clues as to how and where to manage `state` and `props`

##Check the components, read any hints any figure out the component hierarchy.

##Check data and see how it’s presented.

## Deliverables
1. Sushi list is properly received from the server


 componentDidMount = () => {
    this.getAllSushi()
  }

  getAllSushi = () => {
    return fetch(API)
      .then(resp => resp.json())
      .then(data => this.setState({
        allSushi: data
      }))
    
  }


2. Only 4 sushi are rendered at a time
(inside render)
    let nextFour = this.state.allSushi.slice(index, index + 4)


3. Clicking the "More Sushi!" button shows the next set of 4 sushi in the list.

 moreSushi = () => {
    this.setState({
      index : this.state.index + 4
    })
  }



4. Clicking a sushi on a plate will eat the sushi, causing it to be removed from its plate and an empty plate to appear on the table.

Add money and eatenSushi to state.

  eatSushi = (sushi) => {
    this.setState({
      money : this.state.money - sushi.price,
      eatenSushi : [...this.state.eatenSushi, sushi]
    })
  }

  Then render the plates:

      <h1 className="remaining">
        You have: ${props.money} remaining!
      </h1>
      <div className="table">
        <div className="stack">
          {
            renderPlates(props.eatenSushi)
          }
        </div>
      </div>


5. We need to make money! Whenever a sushi is eaten, customers should be automatically charged! Based on a budget decided by you, the developer, the amount of money remaining should go down by the cost of the sushi that was eaten. There is a spot to display this number in the `Table` component

6. No free meals! Customers cannot eat any sushi that exceeds the amount of money remaining in their balance

  eatSushi = (sushi) => {
    if (this.state.money > sushi.price) {
      this.setState({
        money: this.state.money - sushi.price,
        eatenSushi: [...this.state.eatenSushi, sushi]
      })
    }
    else { alert("Not enough cash!") }
  }

### Bonus!

If and only if you have time, you may work on the following:

1. SushiWallet! Add a form for customers to add more money to their balance
2. Full rotation! When the end of the line of sushi is reached, the conveyor belt should start from the beginning. Sushi that have already been eaten should remain eaten. It would be creepy if they reappeared!
3. Anything else!

**Note:** If at the end of the challenge you have achieved all the functionality required but the style looks off, this is okay!
