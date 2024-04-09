// import React from 'react';

export default function table() {
	return (
		<div className="mt-4">
			<div className="table-responsive">
				<table className="table table-striped table-sm">
					<thead>
						<tr>
							<th scope="col">id</th>
							<th scope="col">Nome</th>
							<th scope="col">Mesa</th>
						</tr>
					</thead>
					<tbody>
						<tr>
							<td>1,001</td>
							<td>random</td>
							<td>data</td>
						</tr>
						<tr>
							<td>1,002</td>
							<td>placeholder</td>
							<td>irrelevant</td>
						</tr>
						<tr>
							<td>1,003</td>
							<td>data</td>
							<td>rich</td>
						</tr>
						<tr>
							<td>1,003</td>
							<td>information</td>
							<td>placeholder</td>
						</tr>
						<tr>
							<td>1,004</td>
							<td>text</td>
							<td>random</td>
						</tr>
						<tr>
							<td>1,005</td>
							<td>dashboard</td>
							<td>irrelevant</td>
						</tr>
						<tr>
							<td>1,006</td>
							<td>dashboard</td>
							<td>illustrative</td>
						</tr>
					</tbody>
				</table>
			</div>
		</div>
	);
}
