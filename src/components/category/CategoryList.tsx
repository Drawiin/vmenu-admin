import React, { useState } from 'react'
import PerfectScrollbar from 'react-perfect-scrollbar'
import {
  Box,
  Card,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TablePagination,
  TableRow
} from '@material-ui/core'
import Category from '../../entities/Category'
import IconButton from '@material-ui/core/IconButton'
import DeleteIcon from '@material-ui/icons/Delete'

interface CategoryListProps {
  categorys: Array<Category>
  onDelete: (id: number) => void
}

const CategoryList: React.FC<CategoryListProps> = ({ categorys, onDelete }) => {
  const [limit, setLimit] = useState(5)
  const [page, setPage] = useState(0)

  const handleLimitChange = event => {
    setLimit(event.target.value)
  }

  const handlePageChange = (event, newPage) => {
    setPage(newPage)
  }

  return (
    <Card>
      <PerfectScrollbar>
        <Box minWidth={1050}>
          <Table stickyHeader>
            <TableHead>
              <TableRow>
                <TableCell>Id</TableCell>
                <TableCell>Nome</TableCell>
                <TableCell align="right">Ações</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {categorys
                .slice(page * limit, page * limit + limit)
                .map(category => (
                  <TableRow hover key={category.id}>
                    <TableCell>{category.id}</TableCell>
                    <TableCell>{category.name}</TableCell>
                    <TableCell align="right">
                      <IconButton
                        aria-label="delete"
                        size="medium"
                        onClick={() => onDelete(category.id)}
                      >
                        <DeleteIcon />
                      </IconButton>
                    </TableCell>
                  </TableRow>
                ))}
            </TableBody>
          </Table>
        </Box>
      </PerfectScrollbar>
      <TablePagination
        component="div"
        count={categorys.length}
        onChangePage={handlePageChange}
        onChangeRowsPerPage={handleLimitChange}
        page={page}
        rowsPerPage={limit}
        rowsPerPageOptions={[5, 10, 25]}
      />
    </Card>
  )
}

export default CategoryList
