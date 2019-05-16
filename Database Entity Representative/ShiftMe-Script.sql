create table if not exists users (
	id serial primary key,
	role integer not null,
	email varchar(150) not null,
	fname varchar(100) not null,
	lname varchar(100) not null
);

create table if not exists credentials (
	id serial primary key,
	username varchar(50) not null,
	hashed_password varchar(150) not null,
	user_id integer not null references users(id) on delete cascade
);

create table if not exists weeks (
	id serial primary key,
	start_date date not null unique
);

create table if not exists days (
	id serial primary key,
	name varchar(9) not null
);

create table if not exists shifts (
	id serial primary key,
	start_time timestamptz not null,
	end_time timestamptz not null
);

create table if not exists week_to_day_junction (
	id serial primary key,
	week_id integer not null references weeks(id) on delete cascade,
	day_id integer not null references days(id)
);

create table if not exists day_to_shift_junction (
	id serial primary key,
	day_id integer not null references days(id),
	shift_id integer not null references shifts(id) on delete cascade
);

create table if not exists user_to_shift_junction (
	id serial primary key,
	user_id integer not null references users(id) on delete cascade,
	shift_id integer not null references shifts(id) on delete cascade
);