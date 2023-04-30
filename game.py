# users will be 5 chances to guess the number
# after each guess, we will display if the ans is higher or lower to the users guess
# if they dont get it in 5 tries, they lose.

import numpy as np

# ans is the correct number
ans = np.random.randint(0, 100)
print(ans)

print("Guess the correct number in 5 tries and you win!")

count = 1
correct = False
while count <= 5 and correct == False:
    print("ROUND", count)
    guess = int(input("Your guess: "))  # user's guess
    if guess == ans:
        print("CONGRATS!!! YOU GOT THE RIGHT NUMBER!")
        correct = True
        exit()
    elif guess < ans:
        print("Wrong! The number is bigger than your guess")
    else:
        print("Wrong! The number is smaller than your guess.")

    count += 1


if correct == False:
    print("You have lost.")

