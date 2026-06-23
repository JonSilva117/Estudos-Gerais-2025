package main

import "fmt"

type deck []string // here we are creating a new type called deck which is a slice of strings

func newDeck() deck {

	cards := deck{} // here we are creating a new variable called cards which is of type deck and we are initializing it as an empty slice of strings
	cardsSuits := []string{"Spades", "Diamonds", "Hearts", "Clubs"}
	cardsValues := []string{"Ace", "Two", "Three", "Four", "Five", "Six", "Seven", "Eight", "Nine", "Ten", "Jack", "Queen", "King"}

	// Set two for loops to iterate over the suits and values and create the cards - O(n*m)

	for _, suit := range cardsSuits {
		for _, value := range cardsValues {
			cards = append(cards, value+" of "+suit) // here we are appending a new card to the cards slice, which is a string that is the value of the card followed by " of " and then the suit of the card
		}
	}
	return cards
}

// Underscore _ em um for loop é usado para ignorar o valor da variável, uma vez que esse index nao esta sendo utilizado explicitamente dentro do loop

func (d deck) print() {
	for i, cards := range d {
		fmt.Println(i, cards)
	}
	// this method is called a print and is known as a receiver method
}

// deck seria o mesmo que uma string normal, um int, etc, mas é um tipo personalizado, e podemos adicionar métodos a ele, como o print() acima.
// ha esse comportamento em outras linguagens, onde voce pode criar um tipo personalizado e adicionar metodos a ele, como em Java ou C#, por exemplo. Em Go, voce pode criar um tipo personalizado e adicionar metodos a ele, mas nao ha heranca, ou seja, voce nao pode criar um tipo que herda de outro tipo.
