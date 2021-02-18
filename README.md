# Mongo Bounty Hunters

## Intergalactic Bounty Hunter Database
You've been going to meetup events and networking. You've been telling everyone you're so excited to get a dev job that you'll take _any job_.

You run into a shadowy stranger, who asks you three times 'Really? Any job?' and you continue to agree enthusiastically. Things go dark, and you wake up in a strange place.

The shadowy stranger greets you and says 'Welcome to your new job! You are now our dev who will be building an intergalactic bounty hunter database for us!'

You look around, notice some high end coffee and tea machines, an air hockey table, nap rooms and floor to ceiling windows with a view of outer space. The shadowy stranger takes you to your desk which has a fancy sit-to stand adjustable hight desk with a swing bar, two big monitors, and Herman Miller chair. You say to yourself 'Not bad! Not bad at all!'

## Basic setup
We will be building a database with two tables: bounties and hunters. Here are the columns they should have:

- bounties
  - name: text
  - wantedFor: text
  - reward: integer
  - captured: boolean

- hunters
  - name: text
  - client: text
  - active: boolean

Here's how to proceed:
1. In this folder, follow steps 1 - 8 from the *Make your own table* section of https://github.com/SEI-SEA-1-25/intro-to-sequelize.
1. Use steps 9 - 12 to create the bounties table, and then use them again to create the hunters table.

## Basic CRUD
Make a dbTest.js file to run the following steps from. After you finish each step, you can comment it out as you move onto the next one.

1. Make a bounty with a name of Han Solo, wantedFor of Owing Money, reward of 500000, and captured of false.
1. Make a hunter with a name of Bobba Fett, a client of Jabba the Hut, and an active of true. 
1. Make a hunter with a name of Dengar, a client of Mercurial Swift, and an active of false. Try to do this using findOrCreate (knowing that there isn't one to find, and that sequelize will create it).
1. Find all bounties, assign them to a variable, and console.log them.
1. Find all hunters with active = true, assign them to a variable, and console.log them.
1. Modify Han Solo to have a captured of true. This will involve looking up the record, assigning it to a variable, modifying its property, and calling `.save()` on it.
1. Delete Dengar. Nobody remembers this guy anyway.
1. Ok recreate Dengar. The deletion was just for practice. We'll actually need him later.

Commit after finishing this section!

## Creating a relationship
We want to create a relationship in which a bounty can have many hunters hunting them, and a hunter can be hunting one bounty. In order to create a relationship, we need to make a change on the db side (using a migration), and a separate change on the js side (in the model file).

### The migration side:
Answer the following questions:
<details>
  <summary>Is this relationship 1-to-many or many-to-many?</summary>
  1-to-many: a bounty can have many hunters, but a hunter belongs to just 1 bounty.
</details>

<details>
  <summary>For this kind of relationship, do you need a foreign key or a join table?</summary>
  Foreign key: join tables are for m-t-m relationships.
</details>

<details>
  <summary>Which table should get the foreign key?</summary>
  hunters: the child entity always gets the foriegn key in a 1-t-m relationship.
</details>

<details>
  <summary>What should the foreign key be called?</summary>
  bountyId: this convention is what sequelize is expecting, where the name of the parent table is singularized and the whole word is camel cased.
</details>

<details>
  <summary>What data type should the foreign key be?</summary>
  integer: it references the id column of bounties, which is an integer. So this column should also be an integer.
</details>

With these answers in mind, we'll add the column using these steps:
1. Generate a new migration with `sequelize migration:generate --name=add-bountyId-to-hunters`. Note that we're not generating a model here, because we don't want to make a new table. We just want to make a single change to an existing table.
2. This migration starts off empty, it's a blank vehicle for us to send commands to our database. Underneath the section that says "Add altering commands here", we will put the command to add our foreign key column. You can find the syntax for this command here https://sequelize.org/master/manual/query-interface.html, look at the Adding a Column to a Table section.

<details>
  <summary>Spoiler for what should go in the Add altering commands here section of your migration</summary>
  await queryInterface.addColumn('hunters', 'bountyId', { type: Sequelize.DataTypes.INTEGER })
</details>

3. Run this migration with `sequelize db:migrate`, then look at the table in psql to confirm that the column was added.

### The model side
For the parent model, go to its model file and find the association block. Inside it, add
```
models.<parent-name>.hasMany(models.<child-name>)
```
Remember that `<parent-name>` and `<child-name>` both must match the `modelName` from the parent & child model files!

Then, in the child model's association block, add the other half of the 1-t-m relationship:
```
models.<child-name>.belongsTo(models.<parent-name>)
```

## Using our association
Note that if these aren't working, you should check your associations from the previous section!

Back in our dbTest.js file, complete these one at a time:
1. Look up Han Solo and save him to a variable. Look up Bobba Fett and assign him to a variable too. Associate the two with `hanSolo.addHunters(bobbaFett)`
1. Look up Han Solo, save him to a variable. Look up his hunters with `hanSolo.getHunters()` and save the result to a variable, then log that variable.
1. Look up Bobba Fett, save him to a variable. Look up his bounty with `bobbaFett.getBounty()`, and log that variable.
1. Add Dengar to Han's hunters, the same way we did in step 1.
1. Repeat step 2, and the list should now include both Bobba Fett and Dengar.
1. Repeat step 3, but with Dengar instead of Bobba Fett.
