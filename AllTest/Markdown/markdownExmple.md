# Markdown example:
Items in this example:
- Headings (h1 or #, h2 or ##, h3 or ###)
- Paragraphs
- Prefomated 
- Table
 
<p>Over 500 people have traveled into outer space. While many have written books about the experience, only a few have used more creative means to express what they saw and felt. </p>



<hr>
## Untied States

### Neil Armstrong
<div class="panel panel-success">
<div class="panel-body">
It suddenly struck me that that tiny pea, pretty and blue, was the Earth. I put up my thumb and shut one eye, and my thumb blotted out the planet Earth. I didn't feel like a giant. I felt very, very small.
</div>
</div>

<hr>

### Scott Carpenter
<div class="panel panel-success">
<div class="panel-body">
This planet is not terra firma. It is a delicate flower and it must be cared for. It's lonely. It's small. It's isolated, and there is no resupply. And we are mistreating it. Clearly, the highest loyalty we should have is not to our own country or our own religion or our hometown or even to ourselves. It should be to, number two, the family of man, and number one, the planet at large. This is our home, and this is all we've got. 
 Mecury 7 astronaut, speech at Millersville University, Pennslyvania. 15 October 1992.
</div>
</div>

<hr>

### Alan Shepard
<div class="panel panel-success">
<div class="panel-body">
If somebody'd said before the flight, "Are you going to get carried away looking at the earth from the moon?" I would have say, "No, no way." But yet when I first looked back at the earth, standing on the moon, I cried.
</div>
</div>

<hr>

### James B. Irwin
<div class="panel panel-success">
<div class="panel-body">
As we got further and further away, it [the Earth] diminished in size. Finally it shrank to the size of a marble, the most beautiful you can imagine. That beautiful, warm, living object looked so fragile, so delicate, that if you touched it with a finger it would crumble and fall apart. Seeing this has to change a man.
</div>
</div>

<hr>
### Edgar Mitchell
<div class="panel panel-success">
<div class="panel-body">
You develop an instant global consciousness, a people orientation, an intense dissatisfaction with the state of the world, and a compulsion to do something about it. From out there on the moon, international politics look so petty. You want to grab a politician by the scruff of the neck and drag him a quarter of a million miles out and say, "Look at that, you son of a bitch."
— Edgar Mitchell, Apollo 14 astronaut, People magazine, 8 April 1974.
</div>
</div>

<hr>

## Russia
### Aleksei Leonov
<div class="panel panel-success">
<div class="panel-body">
The Earth was small, light blue, and so touchingly alone, our home that must be defended like a holy relic. The Earth was absolutely round. I believe I never knew what the word round meant until I saw Earth from space.
</div>
</div>

<hr>

## China
### Taylor Wang
<div class="panel panel-success">
<div class="panel-body">
A Chinese tale tells of some men sent to harm a young girl who, upon seeing her beauty, become her protectors rather than her violators. That's how I felt seeing the Earth for the first time. I could not help but love and cherish her.
</div>
</div>

<hr>

## Sample of javascript
<div class="panel panel-warning">
<div class="panel-body">
function getAllAstronauts() {
        $.getJSON('/cgi-bin/get-allAstronauts.py', function(astronauts) {
            astronauts.forEach(function(astronaut) {
                $('#bar').append('"<"li">"' + astronaut[2] + ' ' + astronaut[3] + '"<"/li">"');
            });
        })
    }
</div>
</div>

<hr>

## Sample of a Table. 
#### This button will list astronauts from: Apollo, Gemini, Mercury, Vostok and Voskhod.

<div>
  <button id="getApollo" type="button" class="btn btn-lg btn-success"> List Apollo Astronauts  </button>
</div>

<div>
  <ul id='bar'>
  </ul>
</div>


