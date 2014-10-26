
# What

Command line tool to post-process HTML, parsing BEM attributes and 
transforming them in plain HTML.

# Usage

    Usage:
        beml-cli <input>
        beml-cli -h | --help | --version

Processed output on stdout.

# Example

input.html:

    <div block="b-animals">
         <div elem="cat" mod="size:big, color:red"></div>
    </div>

command:

    beml-cli input.html

output: 

    <div block="b-animals">
             <div elem="cat" mod="size:big, color:red"></div>
    </div>
    <div class="b-animals">
             <div class="b-animals__cat b-animals__cat_size_big b-animals__cat_color_red"></div>
    </div>
