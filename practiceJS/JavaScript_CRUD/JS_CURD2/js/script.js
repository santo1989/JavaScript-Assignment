
let app = new function() {

  this.el = document.getElementById('countries');

  this.countries = ['France', 'Germany', 'England', 'Spain', 'Belgium', 'Italy', 'Portugal', 'Irland', 'Luxembourg'];

  this.Count = function(data) {
    let el   = document.getElementById('counter');
    let name = 'country';

    if (data) {
      if (data > 1) {
        name = 'countries';
      }
      el.innerHTML = data + ' ' + name ;
    } else {
      el.innerHTML = 'No ' + name;
    }
  };
  
  this.FetchAll = function() {
    let data = '';

    if (this.countries.length > 0) {
      for (i = 0; i < this.countries.length; i++) {
        data += '<tr>';
        data += '<td>' + this.countries[i] + '</td>';
        data += '<td><button onclick="app.Edit(' + i + ')">Edit</button></td>';
        data += '<td><button onclick="app.Delete(' + i + ')">Delete</button></td>';
        data += '</tr>';
      }
    }

    this.Count(this.countries.length);
    return this.el.innerHTML = data;
  };

  this.Add = function () {
    el = document.getElementById('add-name');
    // Get the value
    let country = el.value;

    if (country) {
      // Add the new value
      this.countries.push(country.trim());
      // Reset input value
      el.value = '';
      // Dislay the new list
      this.FetchAll();
    }
  };

  this.Edit = function (item) {
    let el = document.getElementById('edit-name');
    // Display value in the field
    el.value = this.countries[item];
    // Display fields
    document.getElementById('spoiler').style.display = 'block';
    self = this;

    document.getElementById('saveEdit').onsubmit = function() {
      // Get value
      let country = el.value;

      if (country) {
        // Edit value
        self.countries.splice(item, 1, country.trim());
        // Display the new list
        self.FetchAll();
        // Hide fields
        CloseInput();
      }
    }
  };

  this.Delete = function (item) {
    // Delete the current row
    this.countries.splice(item, 1);
    // Display the new list
    this.FetchAll();
  };
  
}

app.FetchAll();

function CloseInput() {
  document.getElementById('spoiler').style.display = 'none';
}
