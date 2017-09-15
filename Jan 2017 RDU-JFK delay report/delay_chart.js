var delay_data = [
{"id":"1", "CRS_DEP_TIME": "Sun, 1 Jan 2017 20:25 GMT", "DEP_TIME": "Sun, 1 Jan 2017 21:01 GMT", "ARR_TIME": "Sun, 1 Jan 2017 22:23 GMT"},
{"id":"2", "CRS_DEP_TIME": "Sun, 1 Jan 2017 20:25 GMT", "DEP_TIME": "Sun, 1 Jan 2017 21:11 GMT", "ARR_TIME": "Sun, 1 Jan 2017 22:42 GMT"},
{"id":"3", "CRS_DEP_TIME": "Sun, 1 Jan 2017 20:25 GMT", "DEP_TIME": "Sun, 1 Jan 2017 20:43 GMT", "ARR_TIME": "Sun, 1 Jan 2017 23:44 GMT"},
{"id":"4", "CRS_DEP_TIME": "Sun, 1 Jan 2017 21:00 GMT", "DEP_TIME": "Sun, 1 Jan 2017 21:10 GMT", "ARR_TIME": "Sun, 1 Jan 2017 22:44 GMT"},
{"id":"5", "CRS_DEP_TIME": "Sun, 1 Jan 2017 21:00 GMT", "DEP_TIME": "Sun, 1 Jan 2017 21:02 GMT", "ARR_TIME": "Sun, 1 Jan 2017 22:52 GMT"},
{"id":"6", "CRS_DEP_TIME": "Sun, 1 Jan 2017 21:00 GMT", "DEP_TIME": "Sun, 1 Jan 2017 21:01 GMT", "ARR_TIME": "Sun, 1 Jan 2017 22:48 GMT"},
{"id":"7", "CRS_DEP_TIME": "Sun, 1 Jan 2017 21:00 GMT", "DEP_TIME": "Sun, 1 Jan 2017 22:06 GMT", "ARR_TIME": "Sun, 1 Jan 2017 23:40 GMT"},
{"id":"8", "CRS_DEP_TIME": "Sun, 1 Jan 2017 21:00 GMT", "DEP_TIME": "Sun, 1 Jan 2017 22:12 GMT", "ARR_TIME": "Sun, 1 Jan 2017 23:53 GMT"},
{"id":"9", "CRS_DEP_TIME": "Sun, 1 Jan 2017 21:00 GMT", "DEP_TIME": "Sun, 1 Jan 2017 21:13 GMT", "ARR_TIME": "Sun, 1 Jan 2017 22:45 GMT"},
{"id":"10", "CRS_DEP_TIME": "Sun, 1 Jan 2017 21:00 GMT", "DEP_TIME": "Sun, 1 Jan 2017 21:01 GMT", "ARR_TIME": "Sun, 1 Jan 2017 22:48 GMT"},
{"id":"11", "CRS_DEP_TIME": "Sun, 1 Jan 2017 21:00 GMT", "DEP_TIME": "Sun, 1 Jan 2017 21:12 GMT", "ARR_TIME": "Sun, 1 Jan 2017 22:34 GMT"},
{"id":"12", "CRS_DEP_TIME": "Sun, 1 Jan 2017 21:00 GMT", "DEP_TIME": "Sun, 1 Jan 2017 21:18 GMT", "ARR_TIME": "Sun, 1 Jan 2017 22:38 GMT"},
{"id":"13", "CRS_DEP_TIME": "Sun, 1 Jan 2017 21:00 GMT", "DEP_TIME": "Sun, 1 Jan 2017 21:04 GMT", "ARR_TIME": "Sun, 1 Jan 2017 22:31 GMT"},
{"id":"14", "CRS_DEP_TIME": "Sun, 1 Jan 2017 21:00 GMT", "DEP_TIME": "Sun, 1 Jan 2017 21:15 GMT", "ARR_TIME": "Sun, 1 Jan 2017 22:39 GMT"},
{"id":"15", "CRS_DEP_TIME": "Sun, 1 Jan 2017 21:00 GMT", "DEP_TIME": "Sun, 1 Jan 2017 21:09 GMT", "ARR_TIME": "Sun, 1 Jan 2017 22:30 GMT"},
{"id":"16", "CRS_DEP_TIME": "Sun, 1 Jan 2017 21:00 GMT", "DEP_TIME": "Sun, 1 Jan 2017 21:01 GMT", "ARR_TIME": "Sun, 1 Jan 2017 22:23 GMT"},
{"id":"17", "CRS_DEP_TIME": "Sun, 1 Jan 2017 21:00 GMT", "DEP_TIME": "Sun, 1 Jan 2017 21:05 GMT", "ARR_TIME": "Sun, 1 Jan 2017 22:30 GMT"},
{"id":"18", "CRS_DEP_TIME": "Sun, 1 Jan 2017 10:25 GMT", "DEP_TIME": "Sun, 1 Jan 2017 10:47 GMT", "ARR_TIME": "Sun, 1 Jan 2017 12:10 GMT"},
{"id":"19", "CRS_DEP_TIME": "Sun, 1 Jan 2017 10:23 GMT", "DEP_TIME": "Sun, 1 Jan 2017 10:42 GMT", "ARR_TIME": "Sun, 1 Jan 2017 12:10 GMT"},
{"id":"20", "CRS_DEP_TIME": "Sun, 1 Jan 2017 10:23 GMT", "DEP_TIME": "Sun, 1 Jan 2017 13:00 GMT", "ARR_TIME": "Sun, 1 Jan 2017 14:21 GMT"},
{"id":"21", "CRS_DEP_TIME": "Sun, 1 Jan 2017 10:23 GMT", "DEP_TIME": "Sun, 1 Jan 2017 10:31 GMT", "ARR_TIME": "Sun, 1 Jan 2017 11:56 GMT"},
{"id":"22", "CRS_DEP_TIME": "Sun, 1 Jan 2017 10:23 GMT", "DEP_TIME": "Sun, 1 Jan 2017 10:41 GMT", "ARR_TIME": "Sun, 1 Jan 2017 12:13 GMT"},
{"id":"23", "CRS_DEP_TIME": "Sun, 1 Jan 2017 10:23 GMT", "DEP_TIME": "Sun, 1 Jan 2017 10:27 GMT", "ARR_TIME": "Sun, 1 Jan 2017 11:54 GMT"},
{"id":"24", "CRS_DEP_TIME": "Sun, 1 Jan 2017 10:23 GMT", "DEP_TIME": "Sun, 1 Jan 2017 10:29 GMT", "ARR_TIME": "Sun, 1 Jan 2017 11:46 GMT"},
{"id":"25", "CRS_DEP_TIME": "Sun, 1 Jan 2017 10:23 GMT", "DEP_TIME": "Sun, 1 Jan 2017 10:25 GMT", "ARR_TIME": "Sun, 1 Jan 2017 11:43 GMT"},
];

delay_data = delay_data.map(function(d) {
    if (d.CRS_DEP_TIME != null) { d.CRS_DEP_TIME = new Date(d.CRS_DEP_TIME); }
    if (d.DEP_TIME != null) { d.DEP_TIME = new Date(d.DEP_TIME); }
    if (d.ARR_TIME != null) { d.ARR_TIME = new Date(d.ARR_TIME); }
    return d;
});

function DelayVis() {
    this.sort_mode = "CRS_DEP_TIME";
    this.show_mode = "all";

    this.setSortMode = function(sort_mode) {
        this.sort_mode = sort_mode;
        this.render();
    }

    this.setShowMode = function(show_mode) {
        this.show_mode = show_mode;
        this.render();
    }

    this.render = function() {
        var sort_mode = this.sort_mode;
        var show_mode = this.show_mode;

        delay_data.sort(function(a,b) {
            if (sort_mode == "total") {
                return (a.ARR_TIME-a.CRS_DEP_TIME) - (b.ARR_TIME-b.CRS_DEP_TIME);
            }
            else {
                return a[sort_mode] - b[sort_mode];
            }
        });

        var filtered_delay_data = delay_data.filter(function(d) {
            if (show_mode == 'all') {
                return true;
            }
            else {
                var wait_time = (d.DEP_TIME.getTime() - d.CRS_DEP_TIME.getTime())/1000/60;
                if (show_mode == "less_wait") {
                    return (wait_time <= 5);
                }
                else if (show_mode == "any_wait") {
                    if(5< wait_time)
					return ( wait_time<= 30);
                }
                else if (show_mode == "majority_wait") {
                    return (wait_time > 30);
                }
            }
        });

        var min_date = d3.min(delay_data, function(d) { return d.CRS_DEP_TIME; });
        var max_date = d3.max(delay_data, function(d) { return d.ARR_TIME; });

        var x = d3.scaleLinear()
            .domain([min_date, max_date])
            .range([0, 685]);
        var y = d3.scaleLinear()
            .domain([0, delay_data.length])
            .range([0, 375]);

        var svg = d3.select("#vis_canvas");

        var wait_marks = svg.selectAll(".wait").data(filtered_delay_data, function(d) {
            return d.id;
        });

        wait_marks
            .attr("y", function(d, i) { return y(i); });

        wait_marks.enter().append("rect")
            .attr("class", "wait")
            .attr("x", function(d) { return x(d.CRS_DEP_TIME); })
            .attr("y", function(d, i) { return y(i); })
            .attr("height", y(1)-y(0))
            .attr("width", function(d) { return x(d.DEP_TIME) - x(d.CRS_DEP_TIME);});

        wait_marks.exit().remove();

        var flight_marks = svg.selectAll(".departure").data(filtered_delay_data, function(d) {
            return d.id;
        });

        flight_marks
            .attr("y", function(d, i) { return y(i); });

        flight_marks.enter().append("rect")
            .attr("class", "departure")
            .attr("x", function(d) { return x(d.DEP_TIME); })
            .attr("y", function(d, i) { return y(i); })
            .attr("height", y(1)-y(0))
            .attr("width", function(d) { return x(d.ARR_TIME) - x(d.DEP_TIME);});

        flight_marks.exit().remove()

    }
}